import { Logo } from "./Logo";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import useSearchModal from "../../stores/useSearchModal";
import useFavoritesModal from "../../stores/useFavoritesModal";
import useFavoritesStore from "../../stores/useFavoritesStore";
import styled from "styled-components";
import { WidthContainer } from "./WidthContainer";
import useCartStore from "../../stores/useCartStore";
import useCartModal from "../../stores/useCartModal";

export const Navbar = () => {
  const searchModal = useSearchModal();
  const cartModal = useCartModal();
  const favoritesModal = useFavoritesModal();
  const favoriteCount = useFavoritesStore(
    (state) => state.favoriteProducts.length
  );
  const cartCount = useCartStore((state) => state.cartItems.length);
  return (
    <Header>
      <WidthContainer>
        <Logo />
        {/* Navigation */}
        <Nav>
          <NavLink href="/categories">Categories</NavLink>
        </Nav>
        {/* Icons */}
        <IconContainer>
          <IconWrapper onClick={searchModal.openSearch}>
            <FaSearch />
          </IconWrapper>
          {/* Favorites Icon */}
          <IconWrapper onClick={favoritesModal.openFavorites}>
            <FaHeart />
            {favoriteCount > 0 && <Badge>{favoriteCount}</Badge>}
          </IconWrapper>
          {/* Cart Icon */}
          <IconWrapper onClick={cartModal.openCart}>
            <FaShoppingCart />
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </IconWrapper>
        </IconContainer>
      </WidthContainer>
    </Header>
  );
};

const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-radius: 0;
  text-align: center;

  &:hover {
    color: white;
    background-color: black;
    padding: 8px 16px; // Vergroot padding bij hover voor pill-effect
    border-radius: 9999px; // Maak het volledig rond voor een pill-effect
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 16px;
`;

const IconWrapper = styled.div`
  position: relative;
  color: #4a4a4a;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e53e3e;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
