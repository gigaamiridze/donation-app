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
}

export interface IDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}
