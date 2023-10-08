exports=async function(changeEvent){
    const AWS = require('aws-sdk');
  
  // Configure AWS SES
  AWS.config.update({
    accessKeyId: 'AKIASL6IPUL5HVR5DLJX',
    secretAccessKey: 'c6kWdjZkqAfuF1k9hlDtMGOYre6e+h1XGy+QdTKo',
    region: 'us-east-1', // e.g., 'us-east-1'
  });
  
  // Create an SES object
  const ses = new AWS.SES();
  
  // Define the email parameters
  const fullDocument = changeEvent.fullDocument;
    const operationType = changeEvent.operationType;
  if(operationType=='insert' ){
    const params = {
    Destination: {
      ToAddresses: ['culcruzader@gmail.com'], // Replace with the recipient's email address
    },
    Message: {
      Body: {
        Text: { Data: 'This is a test email from AWS SES.' },
      },
      Subject: { Data: 'Test Email' },
    },
    Source: 'culcruzader@gmail.com', // Replace with the verified sender's email address
  };
  
  // Send the email
  ses.sendEmail(params, (err, data) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent successfully:', data);
    }
  });
    
  }
  
  
}