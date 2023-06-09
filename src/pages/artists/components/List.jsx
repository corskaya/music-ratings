import { Link } from "react-router-dom";
import { Card, Label } from "../../../components";
import styles from "../styles.module.css";

function List({ artists }) {
  return (
    <div className={styles.cardsContainer}>
      {artists.map((artist) => (
        <div key={artist._id} className={styles.cardContainer}>
          <Link to={`/artist/${artist._id}`}>
            <Card
              imageUrl={artist.image}
              rating={artist.rating}
              genres={artist.genres}
            />
          </Link>
          <Link to={`/artist/${artist._id}`} className={styles.cardLabelLink}>
            <Label className={styles.cardLabel}>{artist.name}</Label>
          </Link>
          <Label className={styles.labelSmall}>{artist.foundationYear}</Label>
        </div>
      ))}
    </div>
  );
}

export default List;
