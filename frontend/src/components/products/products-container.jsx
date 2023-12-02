import { styles } from "./products.css";
import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../context/language";
import { words } from "../words";
import {Link} from 'react-router-dom'

export function ProductsContainer({
	name,
	picture,
	os_type,
	is_new,
	display,
	resolution,
	brightness,
	contrast,
	voice,
	ac,
	system,
	wifi,
	ram,
	voice_control,
	tech,
	price,
	url,
	is_published,
}) {
	const { language } = useContext(LanguageContext);

	return (
		<div className="products__container">
			<div
				className="products__container-main"
				style={{
					height: "563px",
					width: "465px",
				}}
			>
				<div
					className="container-main-title"
					style={{
						display: "flex",
						width: "100%",
						fontSize: "26px",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
						marginTop: "20px",
						flexDirection:"column"
					}}
				>
					<img
						style={{
							width: "180px",
						}}
						src={os_type}
						className="system"
					></img>
					{name}
				</div>
				<div
					className="products__main-picture"
					style={{
						backgroundImage: `url(${picture})`,
						width:"400px", 
						top:"165px"
					}}
				></div>
				{/* <img
					className="products__main-picture"
					src={image1 || ""}
					alt="product"
				/> */}
				<div className="container-main-bottom">
					<span className="main-bottom-price">
						{price} {words[language]["currency"]}
					</span>
					<Link
						to={url}
						style={{
							textDecoration: "none",
							cursor: "pointer",
						}}
						className="btn-primary"
					>
						{words[language]["buy"]}
					</Link>
				</div>
			</div>
			<div className="products__container-left">
				<div className="products__container-left-up" style={{
					padding:'30px 35px',
					background: '#5e5e5e',
					color:"#fff",
					fontSize:'20px',
					width:'500px',
					borderRadius:"20px",
					position:"relative"
				}}>
					<span>Характеристики</span>
					<div style={{
						display:'flex',
						flexDirection:'column',
						margin:"75px 0 "
					}}>
						<span style={{
							fontSize:'28px'
						}}>Ultra HD 4K</span>
						<span style={{
							fontSize:'20px'
						}}>Дисплей с яркими цветами</span>
					</div>
					<Link to={url} className="btn-primary" style={{
						marginTop:"40px"
					}}>{words[language]["more"]}</Link>
					{/* wrapper for image 2 */}
					{/* <div className="products__container-left-up-image" style={{
						width: "232px",
						height:"220px",
						backgroundImage: `url(${picture2})`,
						backgroundPositionX:"center",
						backgroundSize:"cover",
						backgroundRepeat:"no-repeat"
					}}>
					</div> */}
				</div>
				<div className="" style={{
					width:'500px',
					height:'202px',
					display:'flex',
					flexDirection:'column',
					justifyContent:'center',
					alignItems:'center',
					padding:'16px 15px',
					gap:'40px',
					backgroundColor:"#fff",
					borderRadius:"20px"
				}}>
					<div className="os_wrapper" style={{
						marginTop: "20px",
						width: "232px",
						height:"220px",
						backgroundImage: `url(${os_type})`,
						backgroundPositionX:"center",
						backgroundSize:"cover",
						backgroundRepeat:"no-repeat"
					}}>
					</div>
					{/* <img
						className="webos-logo"
						style={{
							marginTop: "20px",
							width: "230px",
							height: "unset",
						}}
						src="./images/android_os.png"
						// src={os_type}
						alt=""
					/> */}
					<span className="os-text" style={{
						fontSize:"18px",
						// display:"flex",
						// gap:"10px"
					}}>
						{words[language]["os_title"]}
						<span className="os-text-light">
							{words[language]["os_description"]}
						</span>
					</span>
				</div>
				
					{/* characteristics block */}
				{/* <div className="product__character">
					<div></div>
					<div
						className="character-title"
						style={{
							fontSize: "26px",
							padding: "12px 32px",
							width: "500px",
							textAlign: "center",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							marginBottom: "20px",
						}}
					>
						{words[language]["character"]}
					</div>
					<div
						className="character__info"
						style={{
							fontSize: "16px",
							padding: "12px 32px",
							width: "500px",
							backgroundColor: "rgb(223, 223, 223)",
							borderRadius: "20px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							gap: "20px",
							height: "535px",
						}}
					>
						<span className="display" style={{}}>
							<b>{words[language]["display"]}</b> - {display}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["resolution"]}</b> - {resolution}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["brightness"]}</b> - {brightness}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["contrast"]}</b> - {contrast}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["sound"]}</b> - {voice}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["ac"]}</b> - {ac}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["system"]}</b> - {system}
						</span>
						<span className="display" style={{}}>
							<b>Wi-Fi/Bluetooth</b> - {wifi}
						</span>
						<span className="display" style={{}}>
							<b>RAM/DDR</b> - {ram}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["voice"]}</b> - {voice_control}
						</span>
						<span className="display" style={{}}>
							<b>{words[language]["tech"]}</b> - {tech}
						</span>
					</div>
				</div> */}
			</div>
		</div>
	);
}
