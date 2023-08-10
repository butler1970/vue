<template>
  <v-sheet>
    <v-container>
      <img alt="It's a new dawn" src="../assets/logo.png">
    </v-container>
  </v-sheet>

  <div class="about">
    <h1>Robert Butler</h1>
    <h4>Senior Software Engineer / Senior PHP Developer</h4>

    <h2>Introduction</h2>
    <p>I have a long history of starting and finishing projects throughout my 30+ years of software development experience.  I have demonstrated to all of my employers an aptitude for gathering requirements, turning them into technical specifications and realizing those requirements through development, testing, packaging and/or deployment.</p>
    <p>I have very strong object oriented development skills, experience with application design patterns and enterprise integration patterns.  I have implemented these patterns in various programming languages including C/C++, C#, Java, Kotlin, PHP.</p>
    <p>I have worked with numerous relational database management systems including Microsoft SQL, Oracle and MySQL.  I'm familiar with writing stored procedures, creating normalized schemas and enforcing referential integrity using foreign key constraints, triggers, etc.</p>

    <h3>Languages</h3>
    <p>PHP, Javascript, Kotlin, Java, C#, C/C++</p>

    <h3>AWS Technologies</h3>
    <p>AWS SDK for PHP, AWS SDK for Java, AWS SDK for Kotlin, RDS, SQS, SNS, SES, ElastiCache, Kinesis, Code Pipeline, Route53, CloudFront</p>

    <h3>PHP Frameworks</h3>
    <p>ZendFramework/ZF2, CakePHP, WordPress, Symfony</p>

    <h3>Operating Systems</h3>
    <p>Windows 95/98/2000, XP, Vista, HP/UX, SunOS, Linux (Ubuntu, Debian, RedHat, CentOS, Amazon Linux), MacOS</p>

    <h3>RDBMS</h3>
    <p>MS SQL 6/2000, MySQL, Oracle 8i</p>

    <h3>Web Servers</h3>
    <p>Apache, IIS, Ktor</p>

    <h3>Application Servers</h3>
    <p>Tomcat</p>

    <h3>Message Queues</h3>
    <p>MSMQ, SQS</p>

    <h3>Contact Information</h3>
    <li>Reach out to me on LinkedIn, <a target="_blank" href="https://linkedin.com/in/butler1970">linkedin.com/in/butler1970</a></li>
    <li>Visit my blog at <a target="_blank" href="https://butler1970.com">butler1970.com</a></li>
    <li>Email me at <a target="_blank" href="mailto:butler1970@gmail.com">butler1970@gmail.com</a></li>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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

