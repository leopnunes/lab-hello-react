import img1 from './images/icon1.png';
import img2 from './images/icon2.png';
import img3 from './images/icon3.png';
import img4 from './images/icon4.png';
import Cards from '../Cards';

function Body() {

    return (
        <div style={{display:"flex", width:"560px"}}>
            <div>
            <Cards className="bodyCard" src={img1} alt="img1" title="Declarative" p="React makes it painless to cleate interactive UIs." />
            </div>
            <div>
            <Cards className="bodyCard" src={img2} alt="img2" title="Components" p="Build encapsulated components that manage their state." />
            </div>
            <div>
            <Cards className="bodyCard" src={img3} alt="img3" title="Single-Way" p="A set of immutable values are passed to the component's." />
            </div>
            <div>
            <Cards className="bodyCard" src={img4} alt="img4" title="JSX" p="Statically-typed, designed to run on modern browsers." />
            </div>
        </div>
    )
}

export default Body