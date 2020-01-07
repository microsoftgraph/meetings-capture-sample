using System;
using System.Collections.Generic;
using System.Text;

namespace MeetingCaptureWebJob
{
    public static class Extension
    {
        public static DateTime RoundUp(this DateTime dateTime, TimeSpan roundingInterval)
        {
            return new DateTime(((dateTime.Ticks + roundingInterval.Ticks - 1) / roundingInterval.Ticks) * roundingInterval.Ticks);
        }
    }
}
