import React from "react";

interface HideDuringProps {
  children: React.ReactNode;
  inverse?: Boolean;
}

interface HideDuringState {
  show: Boolean;
}

class HideDuring extends React.Component<HideDuringProps, HideDuringState> {
  timeout: NodeJS.Timeout | null = null;

  state = {
    show: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    this.setState({
      show: !this.props.inverse,
    });

    this.timeout && clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({ show: false });
    }, 200);
  };
}

export default HideDuring;