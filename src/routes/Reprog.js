import '../styles/modeles.css'

export default function setVehicules() {

  const voitures = ['Renault', 'Peugeot', 'Citroëne','Mercedes','BMW','AstonMartin','Alpine','Audi','Maseratti','Fisker','Dacia'];

  return (
    <div>
      <ListeVoitures voitures={voitures} />
    </div>
  );
}


  function ListeVoitures(props) {
  const { voitures } = props;

  return (
    <ul className='modeles  parentModele'>
      {voitures.map(voitures => (
        <li key={voitures}><a className='li-voitures' href='pr'>{voitures}</a></li>
      ))}
    </ul>
  );
}

               
          
      




