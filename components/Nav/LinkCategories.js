import Link from "next/link";
import { useContext } from "react";
import { GlobalCtx } from "pages/_app";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

const LinkCategories = ({ isMainbar = false, children }) => {
  const { categories } = useContext(GlobalCtx) || [];

  const navCategories = categories.map((category, index) => {
    return (
      <CategoryLinks key={index} category={category} isMainbar={isMainbar} />
    );
  });

  return (
    <>
      <ul className={isMainbar ? "desktop" : "mobile"}>
        {/* {children} */}
        {navCategories}
      </ul>
      <style jsx>{`
        .desktop {
          display: none;
        }

        @media screen and (min-width: 1023px) {
          .desktop {
            display: flex;
          }
        }
      `}</style>

      <style jsx global>{`
        .nav-list {
          padding: 0 20px;
        }
      `}</style>
    </>
  );
};

const CategoryLinks = ({ category, isMainbar }) => {
  return isMainbar ? (
    <li key={category.id} className="nav-list">
      <Link as={`/category/${category.slug}`} href="/category/[slug]">
        <h3>{category.name}</h3>
      </Link>
    </li>
  ) : (
    <Link
      key={category.id}
      as={`/category/${category.slug}`}
      href="/category/[slug]"
    >
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <Link as="/locations" href="/locations">
          <ListItemText primary={category.name.toUpperCase()}>
            data
          </ListItemText>
        </Link>
      </ListItem>
    </Link>
  );
};

export default LinkCategories;
