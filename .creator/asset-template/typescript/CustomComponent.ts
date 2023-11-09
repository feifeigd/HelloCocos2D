
import { _decorator, Component, Node } from "cc";
const { ccclass } = _decorator;

/**
 * Robot<%CamelCaseClassName%>
 * 
 * @author <%Author%>
 * @date <%DateTime%>
 */
@ccclass("Robot<%CamelCaseClassName%>")
export class Robot<%CamelCaseClassName%> extends Component {
    start(){

    }

    update(deltaTime: number){

    }
}

/**
 * COMMENTS_GENERATE_IGNORE
 * Use "COMMENTS_GENERATE_IGNORE" tag if you do not want later created scripts to contain comments.
 * 
 * Predefine Variables
 * You can use predefined variables below to setup your scriptings preference.
 * For example, whether to use camel case style.
 * 
 * <%UnderscoreCaseClassName%>, class name in underscore format, like 'new_component'
 * <%CamelCaseClassName%>, class name in camel format, like 'NewComponent'
 * 
 * <%Author%>, who create this file
 * <%DateTime%>, when create this file
 * <%FileBasename%>, creating file name with extension
 * <%FileBasenameNoExtension%>, creating file name without extension
 * <%URL%>, url of this file in COCOS ASSET URL format
 * 
 */
