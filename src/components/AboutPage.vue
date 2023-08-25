<template>
  <v-sheet>
    <v-container>
      <img alt="It's a new dawn" src="../assets/logo.png">
    </v-container>
  </v-sheet>

  <div class="about">
    <h1>Robert Butler</h1>
    <h4>Senior Software Engineer / Senior PHP Developer</h4>

    <MarkDown :source="body" class="text-left"></MarkDown>

    <v-container>
      <h3>Contact Information</h3>
      <li>Reach out to me on LinkedIn, <a target="_blank" href="https://linkedin.com/in/butler1970">linkedin.com/in/butler1970</a></li>
      <li>Visit my blog at <a target="_blank" href="https://butler1970.com">butler1970.com</a></li>
      <li>Check out my github profile at <a target="_blank" href="https://github.com/butler1970">github.com/butler1970</a></li>
      <li>Email me at <a target="_blank" href="mailto:butler1970@gmail.com">butler1970@gmail.com</a></li>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      body: `
# Introduction
With a career spanning over 30 years in software development, I've consistently demonstrated a remarkable record of initiating and successfully completing projects. My expertise covers the entire project lifecycle, from the initial stages of gathering requirements and translating them into precise technical specifications to executing development, rigorous testing, and concluding with meticulous packaging and deployment.{.my-2}

My skill set is marked by robust proficiency in object-oriented development, underpinned by a deep comprehension of application design patterns and enterprise integration patterns. I've adeptly applied these patterns across a diverse spectrum of programming languages, including C/C++, C#, Java, Kotlin, PHP, and JavaScript.{.my-2}

Furthermore, my experience extends to collaborating with various relational database management systems, encompassing Microsoft SQL, Oracle, and MySQL. I am well-versed in creating stored procedures, crafting normalized schemas, and ensuring referential integrity through the implementation of mechanisms like foreign key constraints and triggers, among other strategies.{.my-2}

In addition to my software development prowess, I possess expertise in full-stack development. This includes a high level of proficiency in frontend technologies like JavaScript, jQuery, CSS, Bootstrap, as well as mastery in utilizing frameworks such as React and Vue.js.{.my-2}

### My skills and experience also encompass:{.my-2}

**Languages:** PHP, JavaScript, Kotlin, Java, C#, C/C++{.my-2}

**PHP Frameworks:** ZendFramework/ZF2, CakePHP, WordPress, Symfony, Laravel{.my-2}

**Javascript Frameworks:** React, Vue.js{.my-2}

**Web Servers:** Apache, Nginx, Ktor, IIS{.my-2}

**RDBMS:** MS SQL 6/2000, MySQL, Oracle 8i{.my-2}

**AWS Technologies:** AWS SDK for PHP, AWS SDK for Java, AWS SDK for Kotlin, RDS, SQS, SNS, SES, ElastiCache, Kinesis, Code Pipeline, Route53, CloudFront{.my-2}

**Message Queues:** MSMQ, SQS{.my-2}

**Application Servers:** Tomcat{.my-2}

**Operating Systems:** Windows 95/98/2000, XP, Vista, HP/UX, SunOS, Linux (Ubuntu, Debian, RedHat, CentOS, Amazon Linux), MacOS{.my-2}
      `,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 40px;
}

h2 {
  text-align: left;
  margin-top: 10px;
}

h3 {
  margin: 40px 0 0;
  text-align: left;
}

h4 {
  font-style: italic;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

li {
  text-align: left;
}

p {
  text-align: justify;
  text-justify: inter-word;
  margin-bottom: 10px;
}
</style>

