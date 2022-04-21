import Card from "../card/card-component";

import "../../card-list.styles.css";

{/**Destructure the monsters object directly as the parameter of the function */}
const CardList = (props) => {
    const { monsters } = this.props;

    return (
      <div className={"card-list"}>
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id} />;
        })}
      </div>
    );
  
}

export default CardList;
