import shallowequal from 'shallowequal';


const shallowCompare = (instance, nextProps, nextState) => {

    return (
        !shallowequal(instance.props, nextProps) ||
        !shallowequal(instance.state, nextState)
    );
};

export default shallowCompare;
