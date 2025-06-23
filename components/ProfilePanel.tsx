import ContactLinks from "./ContactLinks";
import NavigationLinks from "./NavigationLinks";
import ProfileHeader from "./ProfileHeader";

export default function ProfilePanel() {
  return (
    <div className="sticky top-0 px-10 py-20">
      <ProfileHeader />
      <NavigationLinks />
      <ContactLinks />
    </div>
  );
}
