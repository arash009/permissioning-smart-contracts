// Libs
import React, { Fragment } from 'react';
import PropTypes from 'prop-types'; // Components
import EnodeTable from './Table';
import AddModal from '../../containers/Modals/Add';
import RemoveModal from '../../containers/Modals/Remove';
// Constants
import { addEnodeDisplay, removeEnodeDisplay } from '../../constants/modals';

const EnodeTab = ({
  list,
  modals,
  toggleModal,
  handleAdd,
  handleRemove,
  isAdmin,
  isReadOnly,
  deleteTransaction,
  isValid,
  isOpen
}) => (
  <Fragment>
    {isOpen && (
      <Fragment>
        <EnodeTable
          list={list}
          toggleModal={toggleModal}
          isAdmin={isAdmin}
          deleteTransaction={deleteTransaction}
          isReadOnly={isReadOnly}
        />
        <AddModal
          isOpen={modals.add && isAdmin && !isReadOnly}
          closeModal={toggleModal('add')}
          handleAdd={handleAdd}
          display={addEnodeDisplay}
          isValid={isValid}
        />
        <RemoveModal
          isOpen={modals.remove && isAdmin && !isReadOnly}
          value={modals.remove}
          closeModal={toggleModal('remove')}
          handleRemove={handleRemove}
          display={removeEnodeDisplay(modals.remove)}
        />
      </Fragment>
    )}
  </Fragment>
);

EnodeTab.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  modals: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default EnodeTab;
