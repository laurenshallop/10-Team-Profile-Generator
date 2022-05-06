const generateHTML = (teamArray) => {
    let object = '';
    for (let i = 0; i<teamArray.length; i++) {
        object += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h5 class="card-title">${teamArray[i].role}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].name}</h6>
          <p class="card-text">ID: ${teamArray[i].id}</p>
          <p class="card-text">Email: <a href="mailto:${teamArray[i].email}" class="card-link">${teamArr[i].email}</a></p>
         `

         if (teamArray[i].officeNumber){
             object +=`
             <p class="card-text">Office Number: ${teamArray[i].officeNumber}</p>
             `
         }

         if (teamArray[i].github) {
             object +=`
             <a href="https://github.com/${teamArray[i].github}" target=_blank class ="card-link"> Github: ${teamArr[i].github}</a><br>
             `
         }

         if (teamArray[i].school) {
             object +=`
             <p class="card-text">School: ${teamArray[i].school}</p>
             `
         }
         object +=`
        </div>
      </div>`    
    }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header><h1>Team Profile</h1></header>
    <div class="app">
    ${object}
</div>
</body>
</html>`
}
module.exports = generateHTML;