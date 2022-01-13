// new mocks below

const mockPosition1 = {
  jobTitle: 'Marketing Manager',
  tags: [
    { text: 'social media', id: 'asdf' },
    { text: 'marketing automation', id: 'asdfghjk' },
  ],
  shortDescription: `If you are marketing-minded, enthusiastic, creative, digitally savvy, up to date on emerging trends and tactics, and obsessed with quality - then this is the position for you, and we want to hear from you!
   
We have top-of-market pay, Friday beers and great support personal growth!`,
  longDescription: `We are searching for a passionate and ambitious MARKETING MANAGER to take on the exciting challenge of managing the company’s marketing activities in their home market - Finland!
  
As the successful candidate, we trust that you will bring relevant marketing experience with proven success, along with a strong can-do attitude and a banquet of fresh ideas! In this marketing role, you will have the opportunity to influence the direction of some of the most respected brands! 
  
You will get to collaborate with colleagues around the world, create campaigns, participate at events, impact product design projects, communicate with like-minded marketing professionals and build brand communities – amongst many other exciting tasks!`,
  deadline: '3',
}

const mockPosition2 = {
  jobTitle: 'Digital Marketing Manager',
  tags: [
    { text: 'digital marketing', id: 'asd123f' },
    { text: 'facebook', id: 'asdfg12893uhjk' },
    { text: 'adwords', id: 'asdfg193uhjk' },
  ],
  shortDescription:
    'As a Digital Marketing Manager you will be responsible for digital marketing content creation, company newsletter, web pages, social media, photographing and graphic design for web and print media. You will be accompanies by a happy group of hard-working and nice people with good values and great benefits',
  longDescription: `We are searching for a passionate and ambitious MARKETING MANAGER to take on the exciting challenge of managing the company’s marketing activities in their home market - Finland!
  
As the successful candidate, we trust that you will bring relevant marketing experience with proven success, along with a strong can-do attitude and a banquet of fresh ideas! In this marketing role, you will have the opportunity to influence the direction of some of the most respected brands! 
  
You will get to collaborate with colleagues around the world, create campaigns, participate at events, impact product design projects, communicate with like-minded marketing professionals and build brand communities – amongst many other exciting tasks!`,
  deadline: '7',
}

const mockPosition3 = {
  jobTitle: 'Marketing Analyst',
  tags: [
    { text: 'analyst', id: 'asd123' },
    { text: 'marketing automation', id: 'fg12893uhjk' },
  ],
  shortDescription:
    'As the Marketing Analyst within Marketing and Sales Renewal, you will lead activities such as developing a market intelligence tool, renewal of the public website, launching a global marketing automation solution and developing and driving adoption. You will be a key stakeholder to the upper management. You will have an opportunity to work with inspired people, a truly global working environment and support for your personal professional development',
  longDescription: `In this role, you get to:
- Lead the strategy, development and deployment of all activities under the marketing
- Represent marketing users in all activity in the customer and sales streams
- Act as the key connection point between the marketing function and the Marketing and Sales Renewal program
- Act as a change leader, championing agile and design thinking

The successful applicant will have a proven track record in developing and deploying successful B2B marketing operations strategies, leveraging data for insight in the development and optimization.`,
  deadline: '9',
}

export const mockPositions = [mockPosition1, mockPosition2, mockPosition3]

const mockCompany1 = {
  companyName: 'E Corp',
  logoUrl:
    'https://ih1.redbubble.net/image.659413411.3655/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
  pictureUrl:
    'https://thumbs.dreamstime.com/b/close-up-business-people-congratulating-one-another-team-building-exercise-54970426.jpg',
  location: 'Helsinki',
  aboutTheCompany: `E Corp is a fast and responsible loan provider with over 500 000 customers in Finland, Sweden and Lithuania. The company was recently granted a specialized banking license by The European Central Bank (ECB) and is currently establishing a new business to enable international growth and a continuous launch of new products.

E Corp’s unique competitive strength is based on a fully automated lending process with a proprietary scoring system that enables fast, secure and personalized loan offers in a responsible way`,
  linkToWebsite: 'www.google.com',
  recruiterName: 'Tyrell Wellick',
}

const mockCompany2 = {
  companyName: 'Wonka Industries',
  logoUrl:
    'https://i.pinimg.com/originals/c7/03/a7/c703a765d546f53eef04dc2eb29f8e17.jpg',
  pictureUrl:
    'https://imgs.smoothradio.com/images/16359?crop=16_9&width=660&relax=1&signature=OWYzew50GlhEjghnZeagBKw4t5g=',
  location: 'Helsinki',
  aboutTheCompany: `Wonka Industries imports, supplies and provides installation and maintenance of food, communication and gold finding equipment as well as systems at home and abroad. 

Our product range includes solutions for foreign and domestic shipping companies, various authorities, shipyards and boatyards`,
  linkToWebsite: 'www.google.com',
  recruiterName: 'Willy Wonka',
}

const mockCompany3 = {
  companyName: 'Dunder Mifflin Paper',
  logoUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yjO1MhjUPEAspfgIjobxEsDk9o1t88aMkw&usqp=CAU',
  pictureUrl: 'https://static1.bigstockphoto.com/2/9/1/large1500/192129916.jpg',
  location: 'Helsinki',
  aboutTheCompany: `We provide our Customers with the highest standard of integrity and quality, to enable them to develop long-term professional relationships with our employees and staff.

We crusade to create a stable working environment and corporate spirit and to give unlimited opportunity to women, and to afford ordinary folk the chance to buy the same things as rich people. We are also committed to nurturing and promulgating wholesome American values.`,
  linkToWebsite: 'www.google.com',
  recruiterName: 'Michael Scott',
}

export const mockCompanies = [mockCompany1, mockCompany2, mockCompany3]
