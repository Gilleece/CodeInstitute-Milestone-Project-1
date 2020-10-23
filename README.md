# Slay International Website

[Live link](https://gilleece.github.io/CodeInstitute-Milestone-Project-1/)

[GitHub Repository](https://github.com/Gilleece/CodeInstitute-Milestone-Project-1)

![](assets/readme/responsiveexample.png)

This website is designed to be the primary online presence for a start-up called "Slay International". This Korean based company is focused on 3 primary services: an international model and talent agency for the Korean market, copywriting/translation (English -> Korean and vice versa), and production service for promotional materials such as video advertising. In making this website I strive to coherently present these options to potential customers and ensure that the website quickly and efficiently leads them to the information they require while maintaining an appealing and professional image for the company. The site is built as my first Milestone project during my study at Code Institute, with the focus being on HTML/CSS. The site utilizes bootstrap as a core component.
 
# TABLE OF CONTENTS

-

## UX

In terms of the site's UI, the goal is to coherently present the services provided to potential customers and ensure that the website quickly and efficiently leads them to the information they require.

Here are the 2 initial wireframes that I made, using Balsamiq. The site's design changed somewhat (specifically the navbar) during production but the foundational layout remains.

![](assets/readme/wireframe.png)
![](assets/wireframes/wireframe2.png)

The primary user of this website will be customers wishing to avail of one of the 3 services available, a possible secondary user maybe models that wish to be promoted through the company.

The site will feature a homepage, with a brief overview/introduction and then 4 main sections. 1 for each service and the final 4th section as a contact page.

Potential user stories:
- As a record label producing a music video, I want to hire a model. I go to the site, see the model section, click on it, see the gallery of models and then go to the contact page to contact the company about a specific model that I would like to hire.
-As a Korean company selling a product to the international market, I want to have my marketing materials translated. I choose the korean version of the site then I go to the copywriting section of the site, see the information and then reach out through the contact page.
-As a non-Korean company selling a product to the Korean market, I want to have my marketing materials translated and localized. I go to the English version of the site then I go to the copywriting section of the site, see the information and then reach out through the contact page.
- As a company looking to have a complete video advertisement made, I go to the production section of the site, see the information and then reach out through the contact page. I potentially also look at the model gallery for specific models that I would like to use in my production.

The following are 2 initial mockups that I created in Balsamiq as a general layout, one has a more colourful button navigation bar while the other is text based with a drop down menu on mobile:
1. https://github.com/Gilleece/CodeInstitute-Milestone-Project-1/blob/master/assets/images/misc/wireframe.png
2. https://github.com/Gilleece/CodeInstitute-Milestone-Project-1/blob/master/assets/images/misc/wireframe2.png

## Features

There are 5 sections: Home, models, copywriting, production, contact.
Home, copyingwriting, production have text and images to display relevant information to the user.
Models page has a gallery that displays an image of each model, and their name underneath.
The contact page has a (currently non-functional placeholder) contact form.
 
### (TO BE DONE) Existing Features
- The contact form needs to be made functional, currently it is placeholder.

### Features Left to Implement
- The website will require a Korean version.

## Technologies Used

- HTML
- CSS
- The project uses **Bootstrap** to aid with responsive design of the site.
- Ajax
- Font Awesome



## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

To run the website locally, simple download from github (here: https://github.com/Gilleece/CodeInstitute-Milestone-Project-1) and double click on index.html after extracting the folder.


## Credits

- Color scheme based on 2 templates on color.adobe.com (https://color.adobe.com/search?q=ED772D&t=hex and https://color.adobe.com/search?q=ed772d&t=hex)

- Pricing template on bootstrap was used as a starting point for the header and navigation menu.

- Code Institute "Love Running" project code was used as a starting point for the hero image.

- Code Institute user centric frontend development mini-project was used as a guide for the footer.

- Code Institute user centric frontend development mini-project was used as a guide for some of the css styling (padding/margins to be specific).

- Some of hero Image code based on: https://gist.github.com/adamdehaven/dceabb07450295fec6fc

- ".center" used from https://www.w3schools.com/howto/howto_css_center-vertical.asp

- Card image formatting tip from https://stackoverflow.com/questions/37287153/how-to-get-images-in-bootstraps-card-to-be-the-same-height-width

- This guide was followed for the collapsible mobile menu: https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp#:~:text=To%20create%20a%20collapsible%20navigation,the%20button%3A%20%22thetarget%22.

- Ajax was used for the collapsible menu

### Content
- N/A

### Media
- Royalty free, free to use, stock photos from pexels.com

### Acknowledgements

- I took inspiration for the header from the "Pricing" bootstrap template.

-I browsed templated.co for general layout ideas (however no code was used from here)
