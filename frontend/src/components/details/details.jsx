import { styles } from "./details.css";

export function Details() {
	return (
		<>
			<section className="details">
				<div className="details-top">
					<span className="details-top-item">Продукция</span>
					<span className="details-top-item">Гарантийный период</span>
					<span className="details-top-item">
						Срок бесплатного Сервизного обслуживания
					</span>
					<span className="details-top-item">Срок службы</span>
				</div>
				<div className="details-bottom">
					<div className="details-bottom-item">Телевизор LiTV</div>
					<div className="details-bottom-item">1 ГОД</div>
					<div className="details-bottom-item">2 ГОДА</div>
					<div className="details-bottom-item">7 ЛЕТ</div>
				</div>
				<div className="details-text">
					<div className="details-title">ДЕТАЛИ*</div>
					<p className="details-p">
						<span>
							* Включает проведение бесплатного ремонта с бесплатной заменой
							необходимых запасных частей. Срок бесплатного сервисного
							обслуживания начинается со дня приобретения и не распротаняется на
							пульт дистанционного управления.
						</span>
						<span>
							* Только детали. Покупатель несет ответсвенность за любые работы
							или услуги, оказанные на дому, по замене неисправных деталей.
						</span>
					</p>
					<div className="details-warning">
						Внимание! Гарантия по гарантийному талону вступает в силу только
						после того, как продавец поставит печать на титульном листе и на
						отрывных купонах и активирует гарантию на сайте litv.uz. Сохраните
						кассовый чек, выданный продавцом, для подтверждения фактической даты
						покупки и просите активировать гарантию на сайте litv.uz после
						покупки.
					</div>
				</div>
			</section>
		</>
	);
}
