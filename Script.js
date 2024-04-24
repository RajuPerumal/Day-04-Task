
  const resumeData = {
    
        "personal_info": {
          "name" : "Rajasekar",
          "email": "raju@example.com",
          "phone": "9597756602",
          "address": "123 Main Street, Cuddalore, India"
        },
        "education": [
          {
            "degree": "Bachelor of Science in Computer Science",
            "university": "University of XYZ",
            "graduation_year": 2015
          },
          {
            "degree": "Master of Business Administration",
            "university": "ABC Business School",
            "graduation_year": 2017
          }
        ],
        "experience": [
          {
            "title": "Software Engineer",
            "company": "Tech Solutions Inc.",
            "location": "City, Country",
            "start_date": "2017-06-01",
            "end_date": "2020-05-31",
            "responsibilities": [
              "Developed web applications using JavaScript, HTML, and CSS.",
              "Collaborated with cross-functional teams to deliver high-quality software products.",
              "Participated in code reviews and provided constructive feedback."
            ]
          },
          {
            "title": "Product Manager",
            "company": "Innovate Tech LLC",
            "location": "City, Country",
            "start_date": "2020-06-01",
            "end_date": "Present",
            "responsibilities": [
              "Led product development lifecycle from ideation to launch.",
              "Conducted market research and competitor analysis.",
              "Defined product roadmap and prioritized features."
            ]
          }
        ]
      }
    
  
  
  // Using for loop
  console.log("Using for loop:");
  for (let i = 0; i < resumeData.education.length; i++) {
    console.log(resumeData.education[i]);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (const key in resumeData.personal_info) {
    console.log(`${key}: ${resumeData.personal_info[key]}`);
  }
  
  // Using for...of loop
  console.log("\nUsing for...of loop:");
  for (const experience of resumeData.experience) {
    console.log(experience);
  }
  