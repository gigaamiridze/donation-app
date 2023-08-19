export interface IDonation {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: number[];
  price: string;
}

export interface IDonationsState {
  donations: IDonation[];
  selectedDonationId: number | null;
  selectedDonationInformation: IDonation | null | undefined;
}

export interface IDonationItemProps {
  donationItemId: number;
  uri: string;
  badgeTitle: string | undefined;
  donationTitle: string;
  price: number;
  onPress: (donationItemId: number) => void;
}
