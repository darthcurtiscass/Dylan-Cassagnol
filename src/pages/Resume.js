import React from 'react';
import Career from "../components/Career";
import resumePdf from "../images/dc-resume.pdf";
function Resume(props) {
    const careerArr = [
        {
            title: "Executive Administrator",
            company: "Logic Integration LLC",
            duties: ["Information Technology Skills", "Very Software Savvy", "Format information for internal and external communication: memos, emails, presentations, reports",
                    "Master user of Trello, basecamp", "Coordinate marketing efforts, photo shoots, and video shoots", "Coordinate website changes such as staff updates, photo uploads, new and updated landing pages",],
            date: "November 2022 - Present"
        },
        {
            title: "Executive Assistant",
            company: "Strong Financial Group",
            duties: ["Scheduled appointments for loan officers",
             "Cross-platform data entry", 
             "Monitored marketing schedules through CRM",
            "Coordinated travel arrangements",
            "Ordered appraisals and credit reports",
            "Provided support to loan-seeking clients"],
            date: "May 2020 - November 2022"
        },
        {
            title: "Head of Sales & Business Development",
            company: "Topher Straus Fine Art",
            duties: ["Generated sales leads", "In-person sales to collectors at galleries and art events",
                    "Formulated business plans to reach clients' creative and fiscal goals",
                    "Planned and organized promotional events with local co-sponsors at galleries, museums, restaurants, hotels, and boutique shops",
                    "Solicited free advertising in well-respected print publications to promote upcoming exhibitions and exploit artistic accomplishments",],
            date: "October 2018 - April 2020"
        },
        {
            title: "Associate Producer",
            company: "Reel Dreams LLC",
            duties: ["Planned and executed pre-production schedules, call sheets, and budgets", 
                    "Acquired funding for independent film productions",
                    "Communicated with casting directors, production coordinators, and various team members to foster a common vision",
                    "Collaborated with pre-production teams to develop storyboards, look books, and production presentations"],
            date: "May 2015 – September 2018"
        },
        {
            title: "Screenwriter",
            company: "Reel Dreams LLC",
            duties: ["Co-wrote feature length screenplay ",
                    "Developed story structures and plot beats to utilize in various genres and formats",
                    "Wrote for television commercials"]
        }
    ];

    const educationArr = [
        {
            school: "University of Denver",
            study: "Full-stack Web Development",
            duration: "Graduated April 2023"
        },
        {
            school: "Colorado Film School",
            study: "Writing and Directing for the Screen",
            duration: "August 2013 — May 2015"
        }
    ]


    return (
        <section >
            <br/>
          <div class="work">
            <div className='text-center'>
                <a href={resumePdf} download="dc-resume.pdf" className="btn btn-primary btn-lg">Download Resumé PDF</a>
            </div>
            <br/>
            <br/>

            {
                careerArr.map(career => {
                    return (
                        <Career title = {career.title} company = {career.company} duties= {career.duties} date = {career.date} />
    
                    )
                })
            }
          </div>
        </section>
      );
}

export default Resume;