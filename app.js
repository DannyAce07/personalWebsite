function greetUser() {
  let userName = prompt("What is your name:", "");
  console.log(userName);
  document.write("Hi " + userName + "!")
  }
  greetUser();
            
if (confirm("Would you like to know the average income for Web Developers across the US?")) {
  document.write(" Here you go!");
  } else {
  document.write("That's too bad ", userName);
  }
