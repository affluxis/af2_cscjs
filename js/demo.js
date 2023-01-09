//
//  Demo.js
//  Affluxis
//
//  Created by Affluxis on 24/09/2022.
//  Copyright © 2022 Affluxis. All rights reserved.
//

function getRnd(event) {
    var str = '';
    var chars = 'abcdefghjkmnopqrstuvwxyz0123456789';
    var len = chars.length;
    for (var i = 0; i < event; i++) str += chars.charAt(Math.floor(Math.random() * len));
    return str;
}
