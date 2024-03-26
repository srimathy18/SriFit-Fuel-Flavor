type FoodItemProps = {
  category: string;
  imageSrc: string;
  itemName: string;
  description: string;
  price: number;
  type: string;
};

const FoodItem = ({
  category,
  imageSrc,
  itemName,
  description,
  type,
}: FoodItemProps) => {
  return (
    <div className={`col-sm-6 col-lg-4 all ${category}`}>
      <div className="box">
        <div>
          <div className="img-box">
            <img src={imageSrc} alt={itemName} />
          </div>
          <div className="detail-box" style={{ paddingBottom: "2rem" }}>
            <div className="d-flex justify-content-between align-items-center">
              <h5>{itemName}</h5>
              <span className="badge border border-secondary text-capitalize">
                {type}
              </span>
            </div>
            <p className="text-wrap text-capitalize">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
