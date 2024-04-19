import Button from "./Button";

function handleFormSubmit(event){
  //  event.preventDefault();
  console.log("Form was submitted") ;  
}



export default function Form(onClick={handleFormSubmit}){
    return(
        <form >
            <input placeholder="writesomeothing" />
            <Button 
            > Submit</Button>
        </form>
    );


}