// Ověř uživatelův věk pro určení přístupových práv
if (user.age > 18) {
  // Umožni přístup, protože uživatel je starší než 18
  grantAccess();
} else {
  // Odepři přístup, protože uživatel je mladší než 18
  denyAccess();
}
