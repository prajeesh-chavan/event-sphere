// const Event = require("./models/Event"); // Assuming your schema file is named eventSchema.js
// const connectDB = require("./config/db");

// // MongoDB connection
// connectDB();

// // Dummy event data
// const eventData = [
//   {
//     title: "Startup Pitch Day",
//     date: new Date("2024-10-05"),
//     time: "09:00 AM",
//     location: "Silicon Valley, CA",
//     description:
//       "A day for aspiring startups to pitch their ideas to investors.",
//     schedule: [
//       "Registration at 8:30 AM",
//       "Opening Remarks at 9:00 AM",
//       "Startup Pitches Begin at 9:30 AM",
//       "Lunch Break at 12:00 PM",
//       "Investor Meetings at 2:00 PM",
//       "Closing Ceremony at 4:00 PM",
//     ],
//     organizer: {
//       name: "StartupHub",
//       email: "contact@startuphub.com",
//       phone: "+1-555-987-6543",
//     },
//     eventOrganizerId: "66e41af8f4bf61a911fcf854",
//   },
//   {
//     title: "Music Fest 2024",
//     date: new Date("2024-12-20"),
//     time: "04:00 PM",
//     location: "Central Park, New York",
//     description:
//       "An outdoor music festival featuring popular bands and artists.",
//     schedule: [
//       "Opening Act at 4:00 PM",
//       "Band Performance by 'The Rockers' at 5:30 PM",
//       "DJ Session at 7:00 PM",
//       "Main Headline Performance at 9:00 PM",
//       "Fireworks at 11:30 PM",
//     ],
//     organizer: {
//       name: "FestEvents",
//       email: "support@festevents.com",
//       phone: "+1-800-567-4321",
//     },
//     eventOrganizerId: "66e41af8f4bf61a911fcf854",
//   },
//   {
//     title: "Charity Gala",
//     date: new Date("2024-09-25"),
//     time: "07:00 PM",
//     location: "Grand Ballroom, Los Angeles",
//     description:
//       "An elegant evening for raising funds for children's education.",
//     schedule: [
//       "Welcome Drinks at 7:00 PM",
//       "Dinner at 8:00 PM",
//       "Live Auction at 9:30 PM",
//       "Entertainment at 10:30 PM",
//       "Closing Remarks at 11:30 PM",
//     ],
//     organizer: {
//       name: "Helping Hands Foundation",
//       email: "info@helpinghands.org",
//       phone: "+1-888-555-6789",
//     },
//     eventOrganizerId: "66e41af8f4bf61a911fcf854",
//   },
//   {
//     title: "International Book Fair",
//     date: new Date("2024-10-15"),
//     time: "10:00 AM",
//     location: "Exhibition Center, London",
//     description:
//       "A global event featuring book launches, author signings, and literary panels.",
//     schedule: [
//       "Opening Ceremony at 10:00 AM",
//       "Author Signing by J.K. Rowling at 11:00 AM",
//       "Panel on Modern Fiction at 1:00 PM",
//       "Children’s Book Reading at 3:00 PM",
//       "Poetry Slam at 5:00 PM",
//     ],
//     organizer: {
//       name: "Global Literature Association",
//       email: "contact@litworld.org",
//       phone: "+44-20-1234-5678",
//     },
//     eventOrganizerId: "649efg6785f2db0012d3f9cc",
//   },
//   {
//     title: "AI & Robotics Expo",
//     date: new Date("2024-11-01"),
//     time: "09:00 AM",
//     location: "Tech Park, San Francisco",
//     description:
//       "A comprehensive expo showcasing the latest in AI and robotics technology.",
//     schedule: [
//       "Registration at 9:00 AM",
//       "Keynote on AI Trends at 10:00 AM",
//       "Robotics Demonstration at 12:00 PM",
//       "Lunch Break at 1:00 PM",
//       "Panel on AI Ethics at 2:30 PM",
//       "Networking at 4:00 PM",
//     ],
//     organizer: {
//       name: "TechXpo",
//       email: "events@techxpo.com",
//       phone: "+1-877-654-3210",
//     },
//     eventOrganizerId: "649ghi7895f2db0012d3f9cd",
//   },
// ];

// // Function to save events
// const saveEvents = async () => {
//   try {
//     const savedEvents = await Event.insertMany(eventData);
//     console.log("Events saved successfully:", savedEvents);
//   } catch (error) {
//     console.error("Error saving events:", error);
//   } finally {
//   }
// };

// saveEvents();

//email sender
// const nodemailer = require("nodemailer");

// // Create a transporter object with SMTP server details
// let transporter = nodemailer.createTransport({
//   service: "Gmail", // You can use other email services as well (e.g., Yahoo, Outlook)
//   auth: {
//     user: "cprajeesh33@gmail.com", // Your email
//     pass: "gbru miez uyfy xpod", // Your email password or app-specific password
//   },
// });

// // Mail options (recipient, subject, and body)
// let mailOptions = {
//   from: "cprajeesh33@gmail.com", // Sender address
//   to: "prajeeshchavan@gmail.com", // List of recipients
//   subject: "Test Email using Nodemailer", // Subject line
//   text: "Hello, this is a test email sent using Nodemailer!", // Plain text body
//   html: "<b>Hello, this is a test email sent using Nodemailer!</b>", // HTML body
// };

// // Send mail with defined transporter object
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(`Error: ${error}`);
//   }
//   console.log(`Message sent: ${info.response}`);
// });

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.port);
console.log(process.env.MONGODB_URI);
