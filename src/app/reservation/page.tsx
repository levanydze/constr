import ReservationContactForm from "../../../components/sectionComponents/ReservationContactForm/ReservationContactForm";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
import MapAndTimes from "../../../components/sectionComponents/map&times/MapTimes";
export const metadata = {
  title: "Reservation",
};

export default function Reservation() {
  const { headImage, pizzaHeadImage } = imagesJson;

  return (
    <div className="fadeOut">
      <PageHeadImage
        value="RESERV A TABLE"
        image={pizzaHeadImage}
        short={false}
      />
      <ReservationContactForm />
      <MapAndTimes />
    </div>
  );
}
