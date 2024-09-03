const grade = 89;

switch(true){
    case (grade >= 90 && grade <=100):
        console.log("You've got a Grade A.");
        break;
    case (grade >= 80 && grade < 90):
        console.log("You've got a Grade B.");
        break;
    case (grade >= 70 && grade < 80 ):
        console.log("You've got a Grade C.");
        break;
    default:
        console.log("You've got a Grade D.");
    }
