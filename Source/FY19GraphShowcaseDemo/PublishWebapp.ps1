param(
    [Parameter(Mandatory)]
    [String]$ResourceGroupName,
	[Parameter(Mandatory)]
    [String]$WebAppName
)

$currentPath = Get-Location

Remove-item .\output -Recurse -Force -Confirm:$false
#publish webapp
Write-Host "Building WebApp..." -ForegroundColor "Green"
dotnet publish .\MeetingCaptureWebApp\MeetingCaptureWebApp.csproj -c Release -o .\output

#publish webjob
Write-Host "Building WebJob..." -ForegroundColor "Green"
dotnet publish .\MeetingCaptureWebJob\MeetingCaptureWebJob.csproj -c Release -o .\output\app_data\jobs\triggered\sendmail

Write-Host "Packing WebApp..." -ForegroundColor "Green"
Compress-Archive ".\output\*" -DestinationPath ".\output\webpackage.zip"

try {
    Write-Host "Publishing WebApp..." -ForegroundColor "Green"
    Publish-AzWebApp -ResourceGroupName $ResourceGroupName -Name $WebAppName -ArchivePath "$currentPath\output\webpackage.zip" -Confirm:$false -Force > $null
    Write-Host "Completed!" -ForegroundColor "Green"
}
catch {
    Write-Host $_.Exception.Message
    Write-Host $_.Exception.ItemName
}