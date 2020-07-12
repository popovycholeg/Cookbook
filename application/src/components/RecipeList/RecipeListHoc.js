import { graphql } from "react-apollo";
import { withStyles } from '@material-ui/core/styles';
import { compose } from "recompose";

import { receipsQuery } from "./queries";
import { styles } from "./styles";

export default compose(graphql(receipsQuery), withStyles(styles));
