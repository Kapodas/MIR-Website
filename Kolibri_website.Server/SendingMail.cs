﻿using System;
using System.Net;
using System.IO;
using System.Threading.Tasks;
using System.Net.Mail;

namespace Kolibri_website.Server
{
    public class SendingMail
    {
        public static void SendQuestion(QuestionCortege question)
        {
            MailAddress from = new MailAddress("osepansergej@gmail.com", "Noreplay");

            MailAddress to = new MailAddress("vazgen6252@gmail.com");

            MailMessage m = new MailMessage(from, to);

            m.Subject = question.Phonumber;
            m.Body = question.Name + "          " + question.Question;
            m.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential("osepansergej@gmail.com", "uvpx esfk kneo gusw");
            smtp.EnableSsl = true;
            smtp.Send(m);
        }
        public static void SendEmploee(EmploeeCortege emploee)
        {
            MailAddress from = new MailAddress("osepansergej@gmail.com", "Noreplay");

            MailAddress to = new MailAddress("vazgen6252@gmail.com");

            MailMessage m = new MailMessage(from, to);

            m.Subject = emploee.Phonumber;
            m.Body = emploee.Name + "\n" + emploee.Mail + "\n" + emploee.Link + "\n" + emploee.Comment ;
            m.IsBodyHtml = true;
            SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new NetworkCredential("osepansergej@gmail.com", "uvpx esfk kneo gusw");
            smtp.EnableSsl = true;
            smtp.Send(m);
        }
    }
}
