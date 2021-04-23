// Enums allow a developer to define a set of named constants.
// Using enums can make it easier to document intent,
// or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

/// === NUMERIC enums
enum Membership {
  Simple, // 0
  Standard, // 1
  Premium, // 2...
}

const membership = Membership.Standard;
console.log(membership); // 1

const membershipReverse = Membership[2];
console.log(membershipReverse); // "Premium"

///=== STRING enums
enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social);

//=== Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}