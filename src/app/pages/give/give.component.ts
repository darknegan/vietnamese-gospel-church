import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { SITE } from '../../shared/site.data';

@Component({
  selector: 'app-give',
  imports: [ButtonModule, LocalizePipe],
  templateUrl: './give.component.html',
  styleUrl: './give.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiveComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly site = SITE;

  readonly ways: readonly { icon: string; title: Localized; body: Localized }[] = [
    {
      icon: 'pi pi-credit-card',
      title: { en: 'Give online', vi: 'Dâng hiến trực tuyến' },
      body: {
        en: 'Make a secure one-time or recurring gift through our trusted giving partner.',
        vi: 'Dâng hiến một lần hoặc định kỳ một cách an toàn qua đối tác đáng tin cậy của chúng tôi.',
      },
    },
    {
      icon: 'pi pi-home',
      title: { en: 'In person', vi: 'Trực tiếp' },
      body: {
        en: 'Give during any Sunday worship service using the offering box at the back of the sanctuary.',
        vi: 'Dâng hiến trong giờ thờ phượng Chúa Nhật qua hộp dâng hiến ở cuối nhà thờ.',
      },
    },
    {
      icon: 'pi pi-envelope',
      title: { en: 'By mail', vi: 'Qua bưu điện' },
      body: {
        en: 'Mail a check to the church office at the address listed in our footer.',
        vi: 'Gửi ngân phiếu đến văn phòng hội thánh theo địa chỉ ở chân trang.',
      },
    },
  ];

  readonly t = {
    eyebrow: { en: 'Give', vi: 'Dâng hiến' } as Localized,
    title: { en: 'Partner with what God is doing here', vi: 'Đồng hành với điều Chúa đang làm' } as Localized,
    lead: {
      en: 'Your generosity supports worship, discipleship, missions, and caring for our church family and neighbors in Garden Grove. Thank you for giving cheerfully.',
      vi: 'Sự rộng rãi của bạn hỗ trợ thờ phượng, môn đồ hóa, truyền giáo và chăm sóc gia đình hội thánh cùng người lân cận tại Garden Grove. Cảm ơn bạn đã dâng hiến cách vui lòng.',
    } as Localized,
    cardLabel: { en: 'Online giving', vi: 'Dâng hiến trực tuyến' } as Localized,
    cardTitle: { en: 'Give securely in less than a minute', vi: 'Dâng hiến an toàn chỉ trong chưa đầy một phút' } as Localized,
    cardBody: {
      en: 'You will be taken to our secure giving partner to complete your gift. You can give once or set up recurring giving.',
      vi: 'Bạn sẽ được chuyển đến đối tác dâng hiến an toàn để hoàn tất. Bạn có thể dâng một lần hoặc thiết lập định kỳ.',
    } as Localized,
    giveBtn: { en: 'Give online', vi: 'Dâng hiến trực tuyến' } as Localized,
    note: { en: 'Opens our external giving site in a new tab.', vi: 'Mở trang dâng hiến bên ngoài trong tab mới.' } as Localized,
    waysTitle: { en: 'More ways to give', vi: 'Các cách dâng hiến khác' } as Localized,
    verse: {
      en: '“Each of you should give what you have decided in your heart to give… for God loves a cheerful giver.”',
      vi: '“Mỗi người nên tùy theo lòng mình đã định mà quyên ra… vì Đức Chúa Trời yêu kẻ dâng của cách vui lòng.”',
    } as Localized,
    verseRef: { en: '2 Corinthians 9:7', vi: '2 Cô-rinh-tô 9:7' } as Localized,
  };
}
