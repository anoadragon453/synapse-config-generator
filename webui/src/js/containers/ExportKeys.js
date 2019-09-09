/*
Copyright 2018 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { connect } from 'react-redux';

import ExportKeys from '../components/ExportKeys';

import { advanceUI } from '../actions';

const mapStateToProps = state => {

    const secretKeyLoaded = state.baseConfig.secretKeyLoaded;
    const secretKey = state.baseConfig.secretKey;
    return {
        secretKeyLoaded,
        secretKey,
    }

};

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(advanceUI()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExportKeys);
