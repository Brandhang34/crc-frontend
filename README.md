# Frontend Infrastructure of my AWS Resume
## Project introduction

The [AWS Resume Challenge](https://cloudresumechallenge.dev/docs/the-challenge/aws/), created by [Forrest Brazeal](https://www.linkedin.com/in/forrestbrazeal), has given me the opportunity to create a resume/portfolio web application on AWS. The challenge consisted of building a personal resume website that would increment the number of users that have visited the page. It also consisted of a backend in which I have created to automate the entire devlopment process using CI/CD and Infrastructure as Code.

## Building the frontend infrastructure

In this README, I will go over how I created the frontend for the AWS Resume Challenge.

![Frontend infrastructure](frontend-architecture.png)

The build process consisted of 3 stages:

* Writing HTML, JavaScript, and CSS code to design the frontend. I originially had a portfolio site made for myself and decided to use this within the challenege. All I had to do was to integrate the user counter at the beginning of my portfolio web page.
* Utilize an existing domain name and linking the S3 bucket to it using CloudFront and Certificate manager(HTTPS).
* Building a CI/CD pipeline using GitHub actions.

And here’s the frontend/portflio: [brandonhang.co](https://brandonhang.co)!

## Summary

Although I already had an existing portfolio page, I really enjoyed the learning process of how to integrate the S3 Static website hosting and how its distributed using CloudFront. I look forward to being able to work on more projects and have a deeper understanding as I begin to realize that getting your hands dirty will help obtain the necessary skils to reach your end goal.

Thanks for reading! I have a backend portion of this project linked in this [repository](https://github.com/Brandhang34/crc-backend)

