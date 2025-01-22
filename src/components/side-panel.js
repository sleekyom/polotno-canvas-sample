import { SidePanel, DEFAULT_SECTIONS } from 'polotno/side-panel';
import { observer } from 'mobx-react-lite';
// import existing section
import { TextSection } from 'polotno/side-panel';

// import default tab component
import { SectionTab } from 'polotno/side-panel';
// import our own icon
import FaShapes from '@meronex/icons/fa/FaShapes';
import { createStore } from 'polotno/model/store';

const store = createStore({
  key: 'nFA5H9elEytDyPyvKL7T', // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  // showCredit: false,
});

// define the new custom section
const CustomSection = {
  name: 'custom',
  Tab: (props) => (
    <SectionTab name="Custom" {...props}>
      <FaShapes icon="new-text-box" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: observer(({ store }) => {
    return (
      <div>
        <p>Here we will define our own custom tab.</p>
        <p>Elements on the current page: {store.activePage?.children.length}</p>
      </div>
    );
  }),
};

// we will have just two sections
const sections = [CustomSection, TextSection];

export default function CustomSidePanel() {
  return (
    <SidePanel store={store} sections={sections} defaultSection="custom" />
  );
};