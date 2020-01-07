using Microsoft.EntityFrameworkCore;

namespace MeetingCaptureWebApp.Data
{

    public class ShowCaseDbContext: DbContext
    {
        public DbSet<Meeting> Meetings { get; set; }
        public DbSet<Agenda> Agendas { get; set; }
        public DbSet<MeetingAttendee> Attendees { get; set; }
        public DbSet<TaskFile> TaskFiles { get; set; }
        public DbSet<TeamChannel> TeamChannels { get; set; }
        public ShowCaseDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
