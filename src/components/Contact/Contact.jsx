import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

function Contact({ id, name, number }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
      <p>
        <IoPerson /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;