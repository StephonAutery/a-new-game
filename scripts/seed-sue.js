const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
	// process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
	process.env.MONGODB_URI || "mongodb://a-new-game:1history@ds331568.mlab.com:31568/heroku_vm824khm"
);

// create the data objects
const sueSeed = [
    {
    question: "President Eisenhower is most known for which event in the civil rights movement?",
    a: "granting permission for the March on Washington",
    b: "urging the Brooklyn Dodgers for sign Jackie Robinson",
    c: "using federal troops to integrate schools in Little Rock",
    answer: "c"
},
{
    question: "Which of the following were causes supported by Emma Goldman?",
    a: "Birth control information for women",
    b: "Atheism",
    c: "Anarchism",
    answer: "all"
},
{
    question: "In what year did women obtain the right to vote in the United States?",
    a: "1920",
    b: "1880",
    c: "1962",
    answer: "a"
},
{
    question: "In what state was gold found during the 1949 Gold Rush?",
    a: "New York.",
    b: "California.",
    c: "Texas",
    answer: "b"
},
{
    question: "Which geographical advantage did the United States gain with the Louisiana Purchase?",
    a: "A Mississippi River port on the Gulf of Mexico.",
    b: "Access to southern ports on the Pacific Ocean.",
    c: "Control of land west of the Rocky Mountains",
    answer: "a"
},
{
    question: "hich was the policy of the Federal Government in the late 1880s as exemplified by the Dawes Act?",
    a: "granting full citizen rights to Native Americanswer",
    b: "moving Native Americanswer to cities to supply labor",
    c: "breaking up tribal lands compelling Native Americanswer to abandon their cultural traditions and assimilate",
    answer: "c"
},
{
    question: "which of the following groups DID receive labor protections such as social security benefits under the New Deal ?",
    a: "educational workers",
    b: "agricultural workers.",
    c: "industrial workers",
    answer: "c"
},
{
    question: "which of the following is true about Fred Korematsu ?",
    a: "he was a U.S.Citizen",
    b: "he refused to evacuate San Leandro, CA and be moved to a Japanese internment camp",
    c: "he lost his challenge in 1944 when the Supreme Court ruled that civil liberties could be denied on the basis of race / national origin",
    answer: "all" 
},
{
    question: "what is the name of the FBI’s counterintelligence program in the 1960’s / 70’s targeting activists such as the Black freedom movement ?",
    a: "ACLU.",
    b: "COINTELPRO",
    c: "ANC",
    answer: "b"
},
{
    question: "which American revolutionary thinker published African Slavery in America, indicting the colonists’ advocacy for their own freedom while supporting slavery ?",
    a: "Thomas Paine",
    b: "1Thomas Jefferson", 
    c: "Alexander Hamilton",
    answer: "a"
},
{
    question: "May 1, International Workers Day, began as a commemoration of which event ?",
    a: "the 1866 Memphis Massacre.",
    b: "the 1970 Kent State Massacre.",
    c: "the 1886 Haymarket Tragedy",
    answer: "c"
}
];

db.Sue.remove({})
  .then(() => db.Sue.collection.insertMany(sueSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });