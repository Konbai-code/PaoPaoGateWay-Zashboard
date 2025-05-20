## PaoPao GateWay
![PaoPao GateWay](https://raw.githubusercontent.com/kkkgo/PaoPaoDNS/main/img.jpg)    

PaoPao GateWay是一个体积小巧、稳定强大的FakeIP网关，核心由clash/mihomo驱动，支持`Full Cone NAT` ，支持多种方式下发配置，支持多种出站方式，包括自定义socks5、自定义openvpn、自定义yaml节点、订阅模式和自由出站，支持节点测速自动选择、节点排除等功能，并附带web面板可供查看日志连接信息等。PaoPao GateWay可以和其他DNS服务器一起结合使用，比如配合[PaoPaoDNS](https://github.com/kkkgo/PaoPaoDNS)的`CUSTOM_FORWARD`功能就可以完成简单精巧的分流。   

本项目为 PaoPao GateWay 的 UI 替代版，保留其 Clash 核心与配置下发能力，仅替换原有管理面板为自定义前端。
功能特性：

继承 PaoPao 全部核心功能（分流、FakeIP、节点切换等）

UI 使用自定义界面，兼容 Clash API

不影响系统服务与配置生成流程

适用于追求简洁 UI 的用户，或想以此为基础进行二次开发者。