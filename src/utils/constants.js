//
// Copyright (C) 2017 University of Dundee & Open Microscopy Environment.
// All rights reserved.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
import {noView} from 'aurelia-framework';

/**
 * @type {string}
 */
export const APP_NAME = 'iviewer';

/**
 * the plugin name
 * @type {string}
 */
export const PLUGIN_NAME = 'omero_iviewer';

/**
 * a convenience string lookup for WEB_API_BASE
 * @type {string}
 */
export const WEB_API_BASE = "WEB_API_BASE";

/**
 * the datasets request url (relative to WEB_API_BASE)
 * @type {string}
 */
export const DATASETS_REQUEST_URL = "/m/datasets";

/**
 * the regions request url (relative to WEB_API_BASE)
 * @type {string}
 */
export const REGIONS_REQUEST_URL = "/m/rois";

/**
 * a convenience string lookup for URI_PREFIX
 * @type {string}
 */
export const URI_PREFIX = "URI_PREFIX";

/**
 * a convenience string lookup for IVIEWER
 * @type {string}
 */
export const IVIEWER = "IVIEWER";

/**
 * a convenience string lookup for WEBGATEWAY
 * @type {string}
 */
export const WEBGATEWAY = "WEBGATEWAY";

/**
 * a convenience string lookup for WEBCLIENT
 * @type {string}
 */
export const WEBCLIENT = "WEBCLIENT";

/**
 * a convenience string lookup for PLUGIN_PREFIX
 * @type {string}
 */
export const PLUGIN_PREFIX = "PLUGIN_PREFIX";

/**
 * the viewer's dom element prefix (complemented by config id)
 * @type {string}
 */

export const VIEWER_ELEMENT_PREFIX = "ol3_viewer_";

/**
 * the possible request params that we accept
 * @type {Object}
 */
export const REQUEST_PARAMS = {
    CHANNELS: 'C',
    CENTER_X: 'X',
    CENTER_Y: 'Y',
    DATASET_ID: 'DATASET',
    IMAGE_ID: 'IMAGE_ID',
    INTERPOLATE: 'INTERPOLATE',
    IMAGES: 'IMAGES',
    MAPS: 'MAPS',
    MODEL: 'M',
    PLANE: 'Z',
    PROJECTION: 'P',
    SERVER: 'SERVER',
    TIME: 'T',
    VERSION: 'VERSION',
    ZOOM: 'ZM'
}

/**
 * the possible modes of channel settings
 * @type {Object}
 */
export const CHANNEL_SETTINGS_MODE = {
    MIN_MAX: 0,
    FULL_RANGE: 1,
    IMPORTED: 2
}

/**
 * the possible 'regions' modes
 * @type {Object}
 */
export const REGIONS_MODE = {
    DEFAULT: 0,
    SELECT: 1,
    TRANSLATE: 2,
    MODIFY: 3,
    DRAW: 4
}

/**
 * the possible region drawing modes
 * @type {Object}
 */
export const REGIONS_DRAWING_MODE = {
    PRESENT_Z_AND_T: 1,
    ALL_Z_AND_T: 2,
    ALL_Z: 3,
    ALL_T: 4,
    NEITHER_Z_NOR_T: 5,
    NOT_Z: 6,
    NOT_T: 7,
    CUSTOM_Z_AND_T: 8
}

/**
 * the render status
 * @type {Object}
 */
export const RENDER_STATUS = {
    NOT_WATCHED: 0,
    IN_PROGRESS: 1,
    RENDERED: 2,
    ERROR: 3
}

/**
 * the text for the tooltips in case of missing permission
 * @type {Object}
 */
export const PERMISSION_TOOLTIPS = {
    CANNOT_EDIT: "No permission to edit",
    CANNOT_DELETE: "No permission to delete"
}

/**
 * the luts png url (relative to webgateway prefix)
 * @type {string}
 */
export const LUTS_PNG_URL = '/img/luts_10.png';

/**
 * luts list for pre-generated png
 * @type {Object}
 */
export const LUTS_NAMES = [
    '16_colors.lut',
    '3-3-2_rgb.lut',
    '5_ramps.lut',
    '6_shades.lut',
    'blue_orange_icb.lut',
    'brgbcmyw.lut',
    'cool.lut',
    'cyan_hot.lut',
    'edges.lut',
    'fire.lut',
    'gem.lut',
    'glasbey.lut',
    'glasbey_inverted.lut',
    'glow.lut',
    'grays.lut',
    'green_fire_blue.lut',
    'hilo.lut',
    'ica.lut',
    'ica2.lut',
    'ica3.lut',
    'ice.lut',
    'magenta_hot.lut',
    'orange_hot.lut',
    'phase.lut',
    'physics.lut',
    'pup_br.lut',
    'pup_nr.lut',
    'rainbow_rgb.lut',
    'red-green.lut',
    'red_hot.lut',
    'royal.lut',
    'sepia.lut',
    'smart.lut',
    'spectrum.lut',
    'thal.lut',
    'thallium.lut',
    'thermal.lut',
    'unionjack.lut',
    'yellow_hot.lut'
];

/**
 * the right hand panel tab names
 * @type {Object}
 */
export const TABS = {
    INFO: 'info',
    SETTINGS: 'settings',
    ROIS: 'rois'
}

/**
 * the possible intial types the viewer was openend with
 * @type {Object}
 */
export const INITIAL_TYPES = {
    NONE: 0,
    IMAGE: 1,
    IMAGES: 2,
    DATASET: 3
}

/**
 * possible projection values
 * @type {Object}
 */
export const PROJECTION = {
    NORMAL: 'normal',
    INTMAX: 'intmax',
    SPLIT: 'split'
}
