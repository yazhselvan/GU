const resume = {
    name: 'YazhmozhiSelvan V',
    title: 'Quality Engineer',
    experience: [
      {
        position: 'Technical Lead',
        company: 'HCLTech',
        duration: '2022 - Present'
      },
      {
        position: 'Associate',
        company: 'Cognizant Technology Solutions',
        duration: '2016 - 2022'
      }
    ],
    skills: ['JavaScript', 'Python', 'Selenium', 'WebdriverIO', 'Java']
  };
  
  console.log('Using for loop:');
  for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
  
  console.log('\nUsing for...in loop:');
  for (let key in resume) {  
      console.log(`${key}: ${resume[key]}`);
  }
  
  console.log('\nUsing for...of loop:');
  for (let skill of resume.skills) {
    console.log(skill);
  }
  
  console.log('\nUsing forEach loop:');
  resume.skills.forEach(skill => {
    console.log(skill);
  });