import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../styles/pin_styles.css';
// import { Dropdown } from 'antd';
import DropdownModal from './DropdownModal';

const MySwal = withReactContent(Swal);

function checkSize(event) {
  const image = event.target;
  image.classList.add('pin_max_width');
  if (image.getBoundingClientRect().width < image.parentElement.getBoundingClientRect().width || image.getBoundingClientRect().height < image.parentElement.getBoundingClientRect().height) {
    image.classList.remove('pin_max_width');
    image.classList.add('pin_max_height');
  }
  image.style.opacity = 1;
}
function deletePin(pinDetails, deletePin) {
  //todo export sweetAlert popups to external file
  MySwal.fire({
    title: 'Delete this pin?',
    // text: 'Confirm deletion of the Pin',
    icon: 'error',

    width: 300,
    // height: 180,
    showCancelButton: true,
    confirmButtonColor: '#2ca34c',
    cancelButtonColor: '#e6002390',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',

    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show',
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const pin_data = {
        ...pinDetails,
      };
      deletePin(pin_data);
      MySwal.fire('Deleted!', 'Pin has been deleted.', 'success');
    }
  });
}

function openPin(pinDetails, openPin) {
  const pin_data = {
    ...pinDetails,
  };
  openPin(pin_data);
}

function Pin(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className={`card card_${props.pinDetails.pin_size}`}>
      <div className='pin_title'>{props.pinDetails.title}</div>

      <div className='pin_modal'>
        <div className='modal_head'>
          <div className='save_card'>♡</div>
        </div>

        <div className='modal_foot'>
          <a href={props.pinDetails.destination}>
            <div className='destination'>
              <div className='pint_mock_icon_container'>
                <img src='./images/upper-right-arrow.png' alt='destination' className='pint_mock_icon' />
              </div>
              <span>{props.pinDetails.destination}</span>
            </div>
          </a>
          <div onClick={() => openPin(props.pinDetails, props.openPin)} className='pint_mock_icon_container'>
            <img src='./images/send.png' alt='send' className='pint_mock_icon' />
          </div>

          <div onClick={() => setShowDropdown(!showDropdown)} className='pint_mock_icon_container'>
            <img src='./images/ellipse.png' alt='edit' className='pint_mock_icon' />
          </div>

          <div onClick={() => deletePin(props.pinDetails, props.deletePin)} className='pint_mock_icon_container'>
            <img src='./images/trash.png' alt='delete' className='pint_mock_icon' />
          </div>
        </div>
      </div>
      <div className='pin_image'>
        <img onLoad={checkSize} src={props.pinDetails.img_url} alt='pin_image' />
      </div>
      {showDropdown ? <DropdownModal showDropdown={showDropdown} setShowDropdown={setShowDropdown} /> : null}
    </div>
  );
}

export default Pin;
