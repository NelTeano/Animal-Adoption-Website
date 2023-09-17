# Animal Adoption Website using React + Vite

![adoption-website](https://github.com/NelTeano/Animal-Adoption-Website/assets/108077205/dd15019f-c1a3-4ae4-9e3a-9cbaf4966d74)

# Hello there! 👋
 Are you a compassionate animal lover looking to make a positive impact on the lives of furry friends? You've come to the right place.<br><br> Welcome to Animal Lover AC( Adoption Center), a dedicated platform for connecting animals in need of loving homes with caring individuals like yourself.

# About Us
At Animal Lover AC( Adoption Center), we believe that every animal deserves a safe and loving forever home. Our mission is to bridge the gap between animal shelters, rescues, and wonderful people who are ready to open their hearts and homes to a new furry companion. Whether you're seeking a loyal canine friend, a playful feline companion, or even a small critter to bring joy to your life, we've got a diverse range of animals just waiting for their second chance.

# What We Offer
<h3>Browse and Adopt:</h3><br> Explore profiles of animals in need of adoption, complete with heartwarming stories, photos, and essential details to help you find your perfect match.
Easy Adoption Process: We've streamlined the adoption process to make it as smooth and stress-free as possible. From initial inquiries to finalizing the adoption, we're here to assist you every step of the way.

# Get Involved
Are you excited to make a difference in an animal's life? Here's how you can get involved:
<ul>
  <li><h3>Browse:</h3> Start by browsing our collection of adorable animals available for adoption.</li> 
  <li><h3>Inquire:</h3> If you find a furry friend that steals your heart, reach out to us for more information or to initiate the adoption process.</li>
  <li><h3>Share:</h3> Even if you're not ready to adopt, you can still help by sharing our website with your friends and family. You might just help someone find their new best friend!</li>
</ul>

<br>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# HOW TO SETUP THE PROJECT

## Requirements

<ul>
  <li>NodeJS</li>
  <li>MongoDB</li>
  <li>Auth0</li>
</ul>


## Set up and test run the server in your local device.


1. **Download the project**

    Open a terminal and `cd` to the directory where you want to clone
    the project repository, then copy-paste the commands below in the
    terminal command line.

    ```cmd
    git clone https://github.com/NelTeano/Animal-Adoption-Website.git
    npm install
    cd server
    npm install
    ```

  2. **Create .env file**
  
Set up the environmental variables for the use of other packages especially the database it requires DATABASE_URL so that it can able to connect to your mongoDB and also for the Auth0


Create a file called `.env` in the
`server` folder.<br>


  3. **Create Auth0 Acount**

in Auth0 Website after you created your account in creating a project you will select `single page web app`
in the Auth0 `dashboard` then select `application` after that elect one of the application
in there you need to get the following `DOMAIN` and `CLIENT_ID` of your application for .env `VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID`

4. **Paste this values inside `.env` file :**

    ```js
    VITE_DATABASE_URI="<DATABASE CONNECTION URL(gets in MongoDB)>"
    VITE_AUTH0_DOMAIN="<YOUR APPLICATION AUTH0 DOMAIN>"
    VITE_AUTH0_CLIENT_ID="<YOUR APPLICATION AUTH0 CLIENT ID>"
    ```
5. **Run the application**

    1. Open two terminal command lines.
    2. Open the project's **root** directory for each terminal.
    3. In the first terminal enter the command `npm run dev`.
    4. In the second terminal enter the command `cd server && npm run start`.
    5. Wait for both terminals to finish setting up.

6. **Access the application**

    Open the address `localhost:5174` on a browser


    
