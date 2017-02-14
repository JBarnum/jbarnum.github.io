//data variable represents the string "%data%" so it's easier to write code later
var data = "%data%";

//four variable objects--bio, education, work, projects
var bio = {
    "name": "Jeryl Barnum",
    "role": "Front-End Web Developer EXTRAORDINARE!",
    "contacts": {
        "mobile": "562-826-2655",
        "email": "mailto:jeryl.barnum@gmail.com?Subject=Hi There!",
        "github": "https://github.com/JBarnum",
        "twitter": "https://twitter.com/J_BARNUM",
        "location": "Los Angeles, CA",
        //optional linkedin add on :)
        "linkedin": "https://www.linkedin.com/in/jbarnum"
    },
    "welcomeMessage": "Check me out! This my Resume page!",
    "skills": ["Humor", "JavaScript", "CSS", "HTML5", "AngularJS", "NodeJS", "jQuery"],
    "biopic": "images/profile.jpg"
};

var education = {
    "schools": [{
            "name": "CSULB",
            "location": "Long Beach, CA",
            "degree": "Bachelor of Science",
            "majors": ["Management Information Systems", " Finance & Investments"],
            "dates": "2005-2010",
            "url": "http://www.csulb.edu"
        },
        {
            "name": "Polytechnic HS",
            "location": "Long Beach, CA",
            "degree": "You Don't Major in High School",
            "majors": ["AP Classes"],
            "dates": "Graduation -- 2005",
            "url": "http://lbpoly.schoolloop.com/"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Development",
            "school": "Udacity",
            "dates": "Nov 2016-Present",
            "url": "https://www.udacity.com/"
        },
        {
            "title": "JavaScript",
            "school": "CodeAcademy",
            "dates": "Off and On",
            "url": "https://www.codecademy.com/"
        },
        {
            "title": "Web Development",
            "school": "FreeCodeCamp",
            "dates": "Here and there",
            "url": "https://www.freecodecamp.com/"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "VectorUSA",
            "title": "NOC Analyst II/Systems Administrator",
            "location": "Los Angeles, CA and Oakland, CA",
            "dates": "March 2016-Present",
            "description": "As a NOC Analyst I am responsible for monitoring multiple customer sites at any one time and providing general routine server routine maintenance tasks. With knowledge of TCP/IP and LAN/WAN’s I work to troubleshoot most problems effectively and with the utmost aptitude.<br>As a system administrator, I am responsible for making sure client networks and customers at client sites are up and running efficiently and effectively with as little down-time as possible. When down-time does occur, I use my abilities to effectively diagnose the problem and come up with a solution ASAP.",
            "workURL": "http://www.vectorusa.com",
            "workLogo": "images/vector.png"
        },
        {
            "employer": "Farmers & Merchants Bank",
            "title": "Network Support Specialst",
            "location": "Long Beach, CA",
            "dates": "March 2009-Febuary 2015",
            "description": "As a Network Services Support Associate, I am responsible for supporting the day-to-day operations of the Bank's Information Systems by resolving how-to questions, performing security resets and basic troubleshooting of system problems. Additionally, I set up, install and maintain printers, workstations, notebooks, and servers at the bank locations.",
            "workURL": "http://www.fmb.com",
            "workLogo": "images/fmb.png"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "XO Crew",
            "dates": "January 2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/tic.png"]
        },
        {
            "title": "Grub1Out",
            "dates": "Febuary 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/Grub_One_Out.png"]
        },
        {
            "title": "TrailMix",
            "dates": "April 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["images/trailmix.png"]
        }
    ]
};

displaySite();

//function that displays site
function displaySite() {

    //displays biography info on site
    bio.display = function() {
            //appends name, role, and msg to site.
            var name = HTMLheaderName.replace(data, bio.name);
            var role = HTMLheaderRole.replace(data, bio.role);
            var msg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
            $("#header").prepend(name, role);
            $("#header").append(msg);

            //create variables for Contacts and biopic
            var formattedContact = HTMLemail.replace(data, bio.contacts.email);
            var formattedPhone = HTMLmobile.replace(data, bio.contacts.mobile);
            var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
            var formattedPic = HTMLbioPic.replace(data, bio.biopic);
            var formattedGit = HTMLgithub.replace(data, bio.contacts.github);
            var formattedLinkedin = HTMLlinkedin.replace(data, bio.contacts.linkeadin);
            var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);

            $("#header").prepend(formattedPic);

            //Since it's using the same contacts jQuery let's you apply to multiple tagged elements
            $("#topContacts, #footerContacts").append(formattedContact,
                formattedPhone,
                formattedTwitter,
                formattedGit,
                formattedLinkedin,
                formattedLocation
            );

            var formattedSkill;

            //Loop through bio.skills object and display it instead of repeating your code
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {

                formattedSkill = HTMLskills.replace(data, bio.skills[i]);

                $("#skills").append(formattedSkill);
            }
    };

    //displays work history on site
    work.display = function() {
        //Display Work loop
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            //double .replace to replace url link for employer and name!
            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer).replace("%info%", work.jobs[i].workURL);
            var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
            var formattedWorkURL = HTMLworkEmployer.replace("%info%", work.jobs[i].workURL);
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDate = HTMLworkDates.replace(data, work.jobs[i].dates);
            $(".work-entry:last").append(formattedDate);

            var formattedWorkLogo = HTMLworkLogo.replace(data, work.jobs[i].workLogo);
            $(".work-entry:last").prepend(formattedWorkLogo);

            var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    };

    //display education on page
    education.display = function() {

        var formattedSchoolName;
        var formattedSchoolDegree;
        var formattedSchoolDates;

        //for loop to display education function
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            //replace # with url so when you click school name, it takes you to school website
            formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name).replace("#", education.schools[i].url);
            formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
            formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors);

            var formattedSchoolEntry = formattedSchoolName + formattedSchoolDegree + formattedSchoolMajor;
            $(".education-entry:last").append(formattedSchoolEntry);

            formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
            $(".education-entry:last").append(formattedSchoolDates);

        }

        /*DO I HAVE TO USE A FOR LOOP? I got bored? See MAP Function below:
            my for loop works by the way :-)
        */
        // for(var i = 0; i < education.onlineCourses.length; i++) {
        //     formattedOnlineName = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
        //     $("#onlinecourses").append(HTMLonlineStart);
        //     $(".online-entry:last").append(formattedOnlineName);
        // }

        // using a different iteration method (MAP!!) instead of for loops--got bored with for loops
        //displays online courses I took
        var courses = education.onlineCourses.map(function(x){
            $("#onlinecourses").append(HTMLonlineStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace(data, x.title);
            $(".online-entry:last").append(formattedOnlineTitle);
            var formattedOnlineSchool = HTMLonlineSchool.replace(data, x.school);
            $(".online-entry:last").append(formattedOnlineSchool);
        });

    };

    //display projects on page function
       projects.display = function() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);

            for(var j = 0; j <projects.projects[i].images.length; j++) {
                //for loop that iterates through images array.
                console.log(projects.projects[i].images[j]);
                var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }

    };

    projects.display();
    bio.display();
    work.display();
    education.display();
}
$(".contact").empty();
$("#mapDiv").append(googleMap);