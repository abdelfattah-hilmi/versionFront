import Cards from "../components/Body/Cards";
import MainBody from "../components/Body/MainBody";



// each card contains data about the snapshot:
        //  -> address ID as title
        //  -> id subtitle
        //  -> date of execution
        //  -> distro
        // dropdown menu with options: elements -> package
//          min 20 elements
                // each element contains name, installed version, candidate version, latest version, 
                // cves (id, cve link, affected versions), reales notes
//          max 100 elements 
export default function(){
  return (
    <>
        <MainBody />
        <Cards />
    </>
  );
}
