$compress = @{
    Path= ".\manifest.json", ".\color.png", ".\outline.png";
    CompressionLevel = "Fastest";
    DestinationPath = ".\manifest.zip";

    }
Compress-Archive @compress -Update;