import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
  "en-US":{
    currentResume: "Current Resume",
    viewResume: "View",
    manageResumeTitle: "Manage Resume",
    noCurrentResume: "No resume uploaded! What are you waiting for?!",
    newResumeTitle: "New Resume"
  },
  it:{
    currentResume: "Current Resume + Pizza :D",
    viewResume: "View Resume + Pizza",
    manageResumeTitle: "Manage Resume Pizza",
    noCurrentResume: "No resume uploaded! Go get pizza.",
    newResumeTitle: "New Pizza?"
  }
});

export default strings;