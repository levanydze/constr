import ReservationContactForm from "../../../components/sectionComponents/ReservationContactForm/ReservationContactForm";
import PageHeadImage from "../../../components/sectionComponents/PageHeadImage/PageHeadImage";
import imagesJson from "../../../json/images.json";
export const metadata = {
  title: "Reservation",
};

export default function Reservation() {
  const { headImage } = imagesJson;

  return (
    <div>
      <PageHeadImage value="Reserv A Table" image={headImage} short={false} />
      <ReservationContactForm />
    </div>
  );
}
