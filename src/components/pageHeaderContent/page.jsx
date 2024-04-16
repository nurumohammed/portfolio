
import PropTypes from "prop-types";

const Page = (props) => {
  const { headerText, icon } = props;
  return (
    <div className="flex font-medium items-center justify-between p-6 border-b border-dashed border-red-900 text-2xl">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

Page.propTypes = {
  headerText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Page;
